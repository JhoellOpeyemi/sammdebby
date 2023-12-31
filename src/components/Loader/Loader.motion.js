const revealTransition = { duration: 0.55, ease: [0.6, 0.01, -0.05, 0.9] };
const moveTransition = { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] };
//

export const enterAnimation = async (animate, scope, setLoader) => {
  await animate(scope.current, { opacity: 1 }, { duration: 0.2 });
  await animate(".first-reveal", { y: "-100%" }, { ...revealTransition });
  await animate(".first", { y: "-100%" }, { ...moveTransition });
  await animate(".base-reveal", { y: "-100%" }, { ...revealTransition });
  await setLoader(false);
};
