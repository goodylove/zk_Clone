// import React, { createContext, useContext, useState } from "react";

// type ToggleContextType = {
//   on: boolean;
//   toggleButton: () => void;
// };
// const ToggleContext = createContext<ToggleContextType>(null);

// const Toggle = ({ children }: { children: React.ReactNode }) => {
//   const [on, setOn] = useState(false);

//   const toggleButton = () => setOn((prev) => !prev);

//   return (
//     <ToggleContext.Provider value={{ on, toggleButton }}>
//       {children}
//     </ToggleContext.Provider>
//   );
// };

// function Button() {
//   const { toggleButton } = useContext(ToggleContext);
//   return (
//     <button
//       onClick={toggleButton}
//       className="cursor-pointer border border-dashed py-1 px-3 bg-black text-white"
//     >
//       toggle
//     </button>
//   );
// }
// function On({ children }: { children: React.ReactNode }) {
//   const { on } = useContext(ToggleContext);
//   return on ? children : null;
// }

// function Off({ children }: { children: React.ReactNode }) {
//   const { on } = useContext(ToggleContext);
//   return !on ? children : null;
// }

// Toggle.Button = Button;
// Toggle.On = On;
// Toggle.Off = Off;

// export default Toggle;

// export function Home() {
//   return (
//     <div className="px-7 py-6">
//       <Toggle>
//         <Toggle.Button />
//         <Toggle.On>
//           <p>The toggle if on now</p>
//         </Toggle.On>
//         <Toggle.Off>
//           <p>Wow its off now oo</p>
//         </Toggle.Off>
//       </Toggle>
//     </div>
//   );
// }
