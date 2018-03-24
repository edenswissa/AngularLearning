export class Recipe
{
    private name : string;
    private description : string;
    private imagePath : string;

    constructor(i_Name :string, i_Description : string, i_ImagePath :string)
    {
        this.name = i_Name;
        this.description = i_Description;
        this.imagePath = i_ImagePath;
    }

    
}