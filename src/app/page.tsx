import StaggerAnimation from '../components/StaggerAnimation'
import UsinguseMottionValueHook from '../components/UsinguseMotionValueHook';
import UsinguseTransformHook from '../components/UsinguseTransformHook';
import UsinguseScrollHook from '../components/UsinguseScrollHook';
export default function Home() {
  
  return (
    <div className='max-w-6xl  px-5 mx-auto py-20 space-y-12'>
    <StaggerAnimation />
    <UsinguseMottionValueHook />
    <UsinguseTransformHook />
    <UsinguseScrollHook />
     </div>
  );
}
