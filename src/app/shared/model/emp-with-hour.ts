
interface TrainingInfo{
    trainingName: string;
    archiveNo: string;
    hour: number;
}

export class EmpWithHour {
    empNo!: string;
    fullname!: string;
    dept!: string;
    title!: string;
    trainingInfos!: TrainingInfo[];
    
}
