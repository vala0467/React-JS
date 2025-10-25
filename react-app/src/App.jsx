import './App.css'
import {ConditionsIterator} from './components/conditionsAndIterators/conditionsAndIterator';
import {ObjectIterator} from './components/objIterator/objectIterator';
import {UseStateHooks} from './components/hooks/useStatehooks';
import {UseStateHookDemo} from './components/hooks/useStateHook_2';
// import {UseStateHookToUpdateObject} from './components/hooks/useStateHookToUpdateObj';
 //import {AxiosDemo} from './components/axiosDemo/axisosComp/';
// import {StyleAndClassBinding} from './components/styleAndClassBinding/styleBindingAndClassBinding';
// import {DateObject} from './components/dateObject/dateObject';
// import {EventsHandling} from './components/eventHandling/eventsHandling';
// import {DemoUseRefHook} from './components/useRefHook/useRefDemo';
// import { TimeoutDemo } from './components/Debouncing/timeoutDemo';
// import { DemoUseEffect } from './components/hooks/useEffectHook';
import { SlideShowComp } from './components/slideShow/slideShow';
import { PropsComp } from './components/Props/propsComp';
import { ParentComponent } from './components/Props/parentChildComp/parentComponent';
import {PropDrillingDemo} from './components/Props/PropDrilling/propDrilling'
import {CallbackFunctionParent} from './components/Props/callbackFunc/propsCallBackFunction';
import {ContextMemoryDemo} from './components/contextMemory/contextMemoryDemo';
import {DemoUseReducer} from './components/useReducer/useReducerDemo';
import {DemoUseMemoAndUseCallback} from './components/useCallbackAndMemo/demoUseCallbackAndMemo';
import {AccountSignupForm} from './components/formsDemo/formsDemo';
import { UseState } from 'react';


function App() {
  return (
    <>
      {/* <ConditionsIterator></ConditionsIterator> */}
      {/* <ObjectIterator></ObjectIterator> */}
      {/* <UseStateHooks></UseStateHooks> */}
      {/* <UseStateHookDemo></UseStateHookDemo> */}
      {/* <UseStateHookToUpdateObject></UseStateHookToUpdateObject> */}
      {/* <AxiosDemo></AxiosDemo> */}
      {/* <StyleAndClassBinding></StyleAndClassBinding> */}
      {/* <DateObject>  </DateObject> */}
      {/* <EventsHandling></EventsHandling> */}
      {/* <DemoUseRefHook></DemoUseRefHook> */}
      {/* <TimeoutDemo> </TimeoutDemo> */}
      {/* <DemoUseEffect></DemoUseEffect> */}
      {/* <SlideShowComp></SlideShowComp> */}
      {/* <PropsComp id="details_1" designation="Sofware Engineer" name={name} contactNo="123456" className="container" backgroundColor="blue" fcolor="#fff"></PropsComp>

      <b>Diff content h ere</b>

      <PropsComp id="details_2" designation="HR Manager" name="Victor" contactNo="9646546" className="container" backgroundColor="grey" fcolor="red"></PropsComp>

      <h3>Another component</h3>

      <PropsComp id="details_2" designation="HR Manager" name="Victor" contactNo="9646546" className="container" backgroundColor="grey" fcolor="red"></PropsComp> */}

      {/* <ParentComponent></ParentComponent> */}

        {/* <PropDrillingDemo></PropDrillingDemo> */}
        {/* <CallbackFunctionParent></CallbackFunctionParent> */}
        {/* <ContextMemoryDemo></ContextMemoryDemo>       */}
        {/* <DemoUseReducer></DemoUseReducer> */}
        {/* <DemoUseMemoAndUseCallback></DemoUseMemoAndUseCallback> */}
        <AccountSignupForm></AccountSignupForm>
      </>
  )
}

export default App
