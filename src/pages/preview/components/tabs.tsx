import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vegan, WheatOff } from "lucide-react";

const TabBar = () => {
  return (
    <Tabs defaultValue="breakfast">
      <TabsList variant="line">
        <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="breakfast">
        <div className="flex flex-col gap-8">
          <MenuCategoryCard />
          <MenuCategoryCard />
        </div>
      </TabsContent>
      <TabsContent value="password">
        <OpenedCard />
      </TabsContent>
    </Tabs>
  );
};
export default TabBar;

const MenuCategoryCard = () => {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="border">
        <img
          className="object-cover h-40 w-full"
          src="https://bistrocharlotte.com/wp-content/uploads/2021/09/5-10.jpg"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 absolute bottom-0 w-full bg-linear-to-t from-black/80 to-transparent">
        <h1 className="text-xl font-serif text-white">
          Sets and breakfast dishes
        </h1>
        <p className="text-muted">We serve breakfast until closing.</p>
      </div>
    </div>
  );
};

const OpenedCard = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-1 items-center text-center">
        <h1 className="text-3xl font-serif uppercase">
          Sets and breakfast dishes
        </h1>
        <p className="text-muted-foreground font-serif">
          We serve breakfast until closing.
        </p>
      </div>
      <div className="flex flex-col gap-8">
    {MenuItemsArray.map((menuItem)=>{
        return(
            <MenuItem key={menuItem.id} title={menuItem.title} description={menuItem.description} glutenFree={menuItem.glutenFree} price={menuItem.price} vegan={menuItem.vegan} imgSrc={menuItem.imgSrc} />
        )
    })}


   
      </div>
    </div>
  );
};

interface MenuItemProps{
    title: string,
    price: string,
    description: string,
    vegan: boolean,
    glutenFree: boolean,
    imgSrc?: string,
    id: string,
}

const MenuItem:React.FC<MenuItemProps>=({title, price, description, imgSrc, vegan="false", glutenFree="false"})=>{
    return(
            <div className="flex flex-col gap-1 items-center text-center border-t border-b py-4 border-dotted border-border">
                 {imgSrc && <img
            className="w-full h-40 objec-cover"
            src={imgSrc}
          />}
          <h2 className="text-2xl font-serif">{title}{"  "}{price}</h2>
          <div className="flex items-center gap-2">
     {vegan &&   <Vegan size="14" className="text-lime-600" />}
      {glutenFree &&   <WheatOff size="14" className="text-orange-400" />}

          </div>
          
          <p className="text-md text-muted-foreground font-serif">
          {description}
          </p>
        </div>
    )
}
const MenuItemsArray=[
    {
        id: "1",
        title: "Eclair",
        price: "10.00",
        description: "strawberry / pistachio / vanilla /chocolate",
        imgSrc: "https://www.biggerbolderbaking.com/wp-content/uploads/2022/01/Eclairs-thumbnail-scaled.jpg",
        glutenFree: true,
        vegan: true
    },
      {
        id: "2",
        title: "Eclair",
        price: "10.00",
        description: "strawberry / pistachio / vanilla /chocolate",
        imgSrc: "https://www.biggerbolderbaking.com/wp-content/uploads/2022/01/Eclairs-thumbnail-scaled.jpg",
        glutenFree: true,
        vegan: true
    },
      {
        id: "3",
        title: "Eclair",
        price: "10.00",
        description: "strawberry / pistachio / vanilla /chocolate",
        imgSrc: "https://www.biggerbolderbaking.com/wp-content/uploads/2022/01/Eclairs-thumbnail-scaled.jpg",
        glutenFree: true,
        vegan: true
    },
]