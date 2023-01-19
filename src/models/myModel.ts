export enum ModelType {
    GoodMode = 1,
    BadModel = 2
}

export interface MyModel {
    id : number;
    modelType : ModelType
}
