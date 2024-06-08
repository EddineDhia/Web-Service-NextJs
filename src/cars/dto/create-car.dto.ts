import { IsEnum ,IsNotEmpty , IsString , IsNumber} from "class-validator";

export class CreateCarDto{
    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    year: number;

    @IsEnum(['Gasoline' , 'Hybrid' , 'Electric' , 'Diesel'],{
        message:'Valid type car required'
    })
    type: 'Gasoline' | 'Hybrid' | 'Electric' | 'Diesel';

    @IsString()
    @IsNotEmpty()
    engineSpecs: string;

    @IsNotEmpty()
    @IsNumber()
    topSpeed: number;
    
    @IsNotEmpty()
    @IsNumber()
    imageSrc: string;
}