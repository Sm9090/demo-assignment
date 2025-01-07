export interface Client {
  id: number;
  clientName: string;
  clinicianName: string;
  clientType: string;
  lastSession: Date;
  yearOfBirth?: string;
  pronoun?: string;
  notes: string;
  status: string;
}

export interface StatusTabsProps {
  statuses: { label: string; key: string }[];
  clients: { status: string }[];
  selectTable: string;
  onSelectTable: (key: string) => void;
}

export interface FiltersProps {
  clientNames: string[];
  clinicianNames: string[];
  setClientNameQuery: (query: string) => void;
  setClinicianNameQuery: (query: string) => void;
}

export interface ActionBarProps {
  selectedClients: number[];
  selectTable: string;
  addNewClient: (newClient: Client) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  addClient: (newClient: Client) => void;
}

export interface RadioProps {
  title: string;
  bgColor?: boolean;
  clientType?: string;
  onChange: (value: string) => void
}

export interface InputProps {
  title: string;
  placeholder: string;
  required: boolean;
  onChange: (value: string) => void
}


export interface SearchInputProps {
  title: string;
  data: string[];
  setSearchQuery: (query: string) => void
}

export interface DatePickerProps {
  title: string
  onChange: (value: string) => void
}

export interface ToggleButtonProps {
  title: string 
  required : boolean
}
export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: string[];
  activeLink: string; 
  handleLinkClick: (link: string) => void
}

export interface HamburgerMenuProps {
  onClick: () => void;
  title?: string
}

export interface TableProps {
  clients: Client[];
  selectedClients: number[];
  onRowSelect: (clientId: number, isChecked: boolean) => void;
  onSelectAll: (isChecked: boolean) => void;
}

export interface CheckedInputProps {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}