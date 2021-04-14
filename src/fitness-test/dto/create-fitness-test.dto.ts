import { IsInt } from "class-validator"
import { UserBasicDto } from '../../user/dto/user-basic.dto';

export class CreateFitnessTestDto {

    user!: UserBasicDto

    @IsInt()
    shoulderGirdle!: number

    @IsInt()
    chestCircumference!: number
    
    @IsInt()
    abdominalCircumference!: number

    @IsInt()
    hipCircumference!: number

    @IsInt()
    circumferenceRightArm!: number

    @IsInt()
    circumferenceLeftArm!: number

    @IsInt()
    rightForearmCircumference!: number

    @IsInt()
    leftForearmCircumference!: number

    @IsInt()
    leftThighCircumference!: number

    @IsInt()
    rightThighCircumference!: number

    @IsInt()
    leftCalfCircumference!: number

    @IsInt()
    rightCalfCircumference!: number

}
