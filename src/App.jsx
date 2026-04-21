import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import { userData } from './api/octokit';
import { MagnifyingGlass } from 'react-loader-spinner';
export default function App() {
  const [userName, setUserName] = useState('octocat');
  const [gitInfo, setGitInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  function handleInput(formData) {
    const info = formData.get('hub_info');
    setUserName(info);
  }
  const darkSwitchRef = useRef(null);
  useEffect(() => {
    async function handleGitHinfo() {
      setLoading(true);
      setError(null);
      try {
        const info = await userData(userName);
        if (info?.login) {
          setGitInfo(info);
        } else {
          throw new Error('User not found');
        }
        setTimeout(() => 'loading', 5000);
      } catch (err) {
        if (typeof err === 'object') {
          console.log(Object.getOwnPropertyDescriptors(err));
          console.log(Object.getOwnPropertyNames(err));
          setError(err?.message || 'Something is wrong');
        } else {
          setError(err || 'Something is wrong');
        }
      } finally {
        setLoading(false);
      }
    }
    handleGitHinfo();
  }, [userName]);
  if (loading)
    return (
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    );
  if (error) return <h1>{error}</h1>;
  return (
    <main className="app_main" ref={darkSwitchRef}>
      <Header darkSwitchRef={darkSwitchRef} />
      <SearchBox handleInput={handleInput} />
      <Card gitInfo={gitInfo} />
    </main>
  );
}
