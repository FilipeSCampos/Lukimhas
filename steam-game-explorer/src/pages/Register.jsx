import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WaveBackground from '@/components/ui/WaveBackground';
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/lib/theme';

export default function Register() {
  const { darkMode } = useTheme();
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <div className={`relative min-h-screen ${theme.background.gradient} transition-colors duration-700`}>
      <WaveBackground isDarkMode={darkMode} />
      
      {/* Container principal com z-index maior que as waves */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Steam Explorer
            </h1>
            <p className={`mt-2 ${theme.text.secondary}`}>
              Explore. Descubra. Jogue.
            </p>
          </div>
          <form
            onSubmit={handleRegister}
            className={`${theme.card.background} ${theme.card.border} p-8 rounded-xl shadow-lg w-full max-w-md relative z-10`}
          >
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Crie sua conta
            </h2>
            <Input
              type="text"
              placeholder="Nome"
              className={`mb-4 ${theme.input.background} ${theme.input.border} ${theme.input.text} ${theme.input.placeholder}`}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              className={`mb-4 ${theme.input.background} ${theme.input.border} ${theme.input.text} ${theme.input.placeholder}`}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              className={`mb-6 ${theme.input.background} ${theme.input.border} ${theme.input.text} ${theme.input.placeholder}`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <div className="text-red-400 mb-4 text-center">{error}</div>}
            {success && (
              <div className="text-green-400 mb-4 text-center">
                Cadastro realizado!{" "}
                <Link to="/login" className="underline">
                  Entrar
                </Link>
              </div>
            )}
            <Button
              type="submit"
              className={`w-full ${theme.button.primary}`}
            >
              Cadastrar
            </Button>
            <div className="text-center mt-4">
              <Link
                to="/login"
                className={`${theme.text.accent} hover:underline`}
              >
                Já tem conta? Entrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}