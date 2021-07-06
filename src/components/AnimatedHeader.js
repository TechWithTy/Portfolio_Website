import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
// Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Projects from '../components/Projects';
import '../sass/main.scss';

function AnimatedHeader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId="main-image-1"
                />
              </div>
            )}
            <Projects loading={loading} />
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default AnimatedHeader;
