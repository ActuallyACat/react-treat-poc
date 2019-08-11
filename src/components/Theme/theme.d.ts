export interface Typography { 
  sansSerif: string,
}

export interface Color {
  primary: string,
  secondary: string, 
  info: string,
  warn: string, 
  error: string, 
  success: string,
  light: string,
  dark: string
}

export interface Utility { 
  borderRadius: string;
}

export interface Theme {  
  color: Color, 
  typography: Typography,
  utility: Utility
}