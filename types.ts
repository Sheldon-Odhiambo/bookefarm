
export interface EnquiryFormData {
  parentName: string;
  childAge: string;
  phone: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  Academics = 'academics',
  Admissions = 'admissions',
  Life = 'life',
  Gallery = 'gallery',
  Contact = 'contact'
}
