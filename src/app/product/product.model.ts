export class Product {
  public id: string;
  public name: string;
  public description: string;
  public price: string;
  public image: string;
  public category: string;

  constructor(
    id: string,
    name: string,
    desc: string,
    price: string,
    image: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.price = price;
    this.image = image;
    this.category = category;
  }
}
