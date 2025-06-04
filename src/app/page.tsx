import StaggerAnimation from '../components/StaggerAnimation'
import UsinguseMottionValueHook from '../components/UsinguseMotionValueHook';
import UsinguseTransformHook from '../components/UsinguseTransformHook';
import UsinguseScrollHook from '../components/UsinguseScrollHook';
import BouncingCircle from '../components/simple-transformations/BouncingCircle';
import SpinningIcon from '../components/simple-transformations/SpinningIcon';
import MovingRotation from '../components/simple-transformations/MovingRotation';
import SkewedRectangle from '../components/simple-transformations/SkewedRectangle';
import FadeComponent from '../components/simple-transitions/FadeComponent';
import SidebarSample from '../components/simple-transitions/SidebarSample';
import ModalSample from '../components/simple-transitions/ModalSample';
import SimpleToast from '../components/simple-transitions/SimpleToast';
import PulsatingEffect from '../components/simple-keyframes/PulsatingEffect';
import ColorChange from '../components/simple-keyframes/ColorChange';
import SlidingText from '../components/simple-keyframes/SlidingText';
import ZigZag from '../components/simple-keyframes/ZigZag';
import WaveEffect from '../components/simple-keyframes/WaveEffect';
import TooltipVariant from '../components/simple-variants/TooltipVariant';
export default function Home() {
  
  return (
    <div className='max-w-6xl  px-5 mx-auto py-20 space-y-12'>
    <StaggerAnimation />
    <UsinguseMottionValueHook />
    <UsinguseTransformHook />
    <UsinguseScrollHook />
    <BouncingCircle />
    <SpinningIcon />
    <MovingRotation />
    <SkewedRectangle />
    <FadeComponent />
    <SidebarSample />
    <ModalSample />
    <SimpleToast />
    <PulsatingEffect />
    <ColorChange />
    <SlidingText />
    <ZigZag />
    <WaveEffect />
    <TooltipVariant />
     </div>
  );
}
