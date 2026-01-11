import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const BlogSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding: 100px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 18px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.secondaryText};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogPost = styled(motion.a)`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.accent};
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #222;
`;

const PostContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const PostTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
`;

const PostDate = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 10px;
  display: block;
`;

const PostDescription = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.buttonBg}20; /* 20% opacity */
  color: ${({ theme }) => theme.accent};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
`;

function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        // Fetch generic 'react' articles from Dev.to since specific user might not exist yet
        // Replace 'tag=react' with 'username=your_username' when you have one
        fetch('https://dev.to/api/articles?tag=react&top=5&per_page=3')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch posts", err);
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <BlogSection
            id="blog"
            ref={sectionRef}
            initial="hidden"
            animate={isSectionVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <div className="container">
                <SectionTitle variants={itemVariants}>Latest Thoughts</SectionTitle>
                <SectionSubtitle variants={itemVariants}>
                    Exploring code, architecture, and the future of AI.
                </SectionSubtitle>

                {loading ? (
                    <p style={{ color: '#888' }}>Loading articles...</p>
                ) : (
                    <BlogGrid variants={containerVariants}>
                        {posts.map((post) => (
                            <BlogPost
                                key={post.id}
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                title={post.title}
                            >
                                {post.cover_image && (
                                    <PostImage src={post.cover_image} alt={post.title} loading="lazy" />
                                )}
                                <PostContent>
                                    <PostDate>{new Date(post.published_at).toLocaleDateString()}</PostDate>
                                    <PostTitle>{post.title}</PostTitle>
                                    <PostDescription>
                                        {post.description}
                                    </PostDescription>
                                    <TagContainer>
                                        {post.tag_list?.slice(0, 3).map(tag => (
                                            <Tag key={tag}>#{tag}</Tag>
                                        ))}
                                    </TagContainer>
                                </PostContent>
                            </BlogPost>
                        ))}
                    </BlogGrid>
                )}
            </div>
        </BlogSection>
    );
}

export default Blog;
