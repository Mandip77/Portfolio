import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionLabel = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.accent} 0%, ${({ theme }) => theme.accentCyan} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.secondaryText};
  max-width: 480px;
  margin: 0 auto;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const PostCard = styled(motion.a)`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(14px);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-6px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.glowColor};
  }
`;

const PostImg = styled.img`
  width: 100%;
  height: 188px;
  object-fit: cover;
  background: ${({ theme }) => theme.cardBorder};
`;

const PostBody = styled.div`
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostDate = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.accent};
`;

const PostTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.45;
`;

const PostDesc = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.65;
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  background: ${({ theme }) => theme.surfaceHover};
  color: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

const LoadingText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
`;

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  useEffect(() => {
    fetch('https://dev.to/api/articles?tag=react&top=5&per_page=3')
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Section
      id="blog"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionVisible ? 'visible' : 'hidden'}
    >
      <Inner>
        <Header>
          <SectionLabel>Writing</SectionLabel>
          <Heading>
            Latest <GradientSpan>Thoughts</GradientSpan>
          </Heading>
          <Subtitle>Exploring code, architecture, and the future of AI.</Subtitle>
        </Header>

        {loading ? (
          <LoadingText>Loading articles…</LoadingText>
        ) : (
          <Grid variants={containerVariants}>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
                aria-label={post.title}
              >
                {post.cover_image && (
                  <PostImg src={post.cover_image} alt={post.title} loading="lazy" />
                )}
                <PostBody>
                  <PostDate>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</PostDate>
                  <PostTitle>{post.title}</PostTitle>
                  <PostDesc>{post.description}</PostDesc>
                  <TagRow>
                    {post.tag_list?.slice(0, 3).map((tag) => (
                      <Tag key={tag}>#{tag}</Tag>
                    ))}
                  </TagRow>
                </PostBody>
              </PostCard>
            ))}
          </Grid>
        )}
      </Inner>
    </Section>
  );
}

export default Blog;
