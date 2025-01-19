const useMoveToTop = () => {
  const moveToTopOfPage = () => {
    // Make it scroll to the top of the page slowly.
    window.scrollTo(0, 0);
  };

  return moveToTopOfPage;
};

export default useMoveToTop;
