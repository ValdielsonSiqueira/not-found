import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@valoro/ui";
import "./index.css";

export default function Root(props) {
  const navigateToHome = () => {
    // Check if we are in a single-spa environment or standard router
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", "/dashboard");
      // Simple window.location.href causes full reload, ensuring clean state
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-zinc-900 p-4">
      <Card className="w-full max-w-md shadow-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-6">
            <h1 className="text-8xl font-black text-gray-200 dark:text-zinc-800 select-none">
              404
            </h1>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Página não encontrada
          </CardTitle>
          <CardDescription className="text-base mt-2">
            A página que você está procurando não existe ou foi movida.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Por favor, verifique a URL ou volte para a página inicial.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="w-full sm:w-auto min-w-[140px]"
            onClick={navigateToHome}
          >
            Voltar para o Início
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
