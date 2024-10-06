
import {NextUIProvider} from "@nextui-org/system";

export default function Provider({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  );
}