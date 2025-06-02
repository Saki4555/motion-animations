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
import ModalSample from '../components/simple-transitions/ModalSample'
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
     </div>
  );
}
