import { LoginForm } from "@/components/login-form";
import { useTheme } from "@/components/theme/theme-provider";

import logo_light from "@/assets/logos/wcc-full-light.svg";
import logo_dark from "@/assets/logos/wcc-full-dark.svg";
import background from "@/assets/exec/exec-group-photo.webp";

const LoginPage = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logo_dark : logo_light;

  return (
    (<div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img src={logo} alt="logo" className="w-60 h-55 mt-[-50px] mb-[-35px]" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={background}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:grayscale" />
      </div>
    </div>)
  );
}

export default LoginPage;