export interface CarData {
  availability: boolean;
  car: string;
  car_color: string;
  car_model: string;
  car_model_year: number;
  car_vin: string;
  id: number;
  price: string;
}

export interface CarsTableProps {
  cars: CarData[];
}

export interface SearchBarProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  doSearch: () => void;
}

export interface PaginationProps {
  carsPerPage: number;
  totalCars: number;
  paginate: (pageNumber: number) => void;
}

export interface ModalProps {
  children: any;
  active: boolean;
  setActive: (arg0: boolean) => void;
}
