// Types partagés pour l'application

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  href?: string;
  cardColor?: string;
}

export interface ButtonProps extends BaseComponentProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  bgColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface DonationFormData {
  nomPrenoms: string;
  email: string;
  telephone: string;
  typeDon: string;
  numeroTelephone?: string;
  montant?: string;
  message?: string;
}

export interface ContactFormData {
  nom: string;
  prenoms: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}