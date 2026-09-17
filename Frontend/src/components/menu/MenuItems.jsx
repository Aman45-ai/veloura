import React from 'react'
import { ChefHat, Croissant, Salad, Soup, Utensils, Wine } from 'lucide-react'
import paneer from '../../assets/paneer.png'

const MenuItems = () => {
  return (
    <div className='bg-[#080706] text-zinc-300 font-[cormorant-garamond-heading]'>

      <div className='grid grid-cols-11 border-y border-[#dea869]/40'>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800 text-[#dea869]'>
          <Utensils size={20} />
          <p className='text-sm'>Starters</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <Soup size={20} />
          <p className='text-sm'>Soups</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <Salad size={20} />
          <p className='text-sm'>Salads</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <ChefHat size={20} />
          <p className='text-sm'>Indian Classics</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <Utensils size={20} />
          <p className='text-sm'>Continental</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <Salad size={20} />
          <p className='text-sm'>Pasta & Risotto</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <ChefHat size={20} />
          <p className='text-sm'>Mains</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <Croissant size={20} />
          <p className='text-sm'>Breads</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <Utensils size={20} />
          <p className='text-sm'>Sides</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5 border-r border-zinc-800'>
          <ChefHat size={20} />
          <p className='text-sm'>Desserts</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-5'>
          <Wine size={20} />
          <p className='text-sm'>Beverages</p>
        </div>
      </div>

      <MenuSection title='STARTERS' subtitle='Small plates. Big beginnings.' items={[
        [paneer, 'TANDOORI PANEER BITES', 'Tender paneer cubes marinated in house spices, chargrilled and served with mint chutney.', '₹420'],
        [paneer, 'SPICED CALAMARI', 'Crispy calamari with peri-peri seasoning, served with garlic aioli.', '₹480'],
        [paneer, 'CLASSIC BRUSCHETTA', 'Toasted sourdough with tomatoes, basil, olive oil and parmesan.', '₹350'],
        [paneer, 'STUFFED MUSHROOMS', 'Button mushrooms filled with herbed cheese, baked and finished with truffle oil.', '₹390']
      ]} />

      <MenuSection title='SOUPS' subtitle='Warm beginnings.' items={[
        [paneer, 'CREAM OF TOMATO', 'Roasted tomatoes, fresh cream and basil, finished with herb oil.', '₹320'],
        [paneer, 'MULLIGATAWNY SOUP', 'A spiced lentil and vegetable soup with coconut and curry leaves.', '₹340']
      ]} />

      <MenuSection title='SALADS' subtitle='Fresh ingredients. Brighter dishes.' items={[
        [paneer, 'GARDEN FRESH SALAD', 'Seasonal greens, cherry tomatoes, cucumbers, olives and house dressing.', '₹360'],
        [paneer, 'ROASTED BEETROOT SALAD', 'Beetroot, feta, walnuts and arugula with a citrus vinaigrette.', '₹420']
      ]} />

      <MenuSection title='INDIAN CLASSICS' subtitle='Timeless traditions. Always special.' items={[
        [paneer, 'BUTTER CHICKEN', 'A rich and creamy tomato gravy with tender chicken, served with naan or rice.', '₹620'],
        [paneer, 'PANEER LABABDAR', 'Soft paneer in a velvety, spiced tomato-cashew gravy.', '₹560'],
        [paneer, 'DAL MAKHANI', 'Slow-cooked black lentils with butter and cream.', '₹420'],
        [paneer, 'ROGAN JOSH', 'Aromatic Kashmiri lamb curry with signature spices.', '₹680']
      ]} />

      <MenuSection title='CONTINENTAL' subtitle='Global flavours. Beautifully plated.' items={[
        [paneer, 'GRILLED SALMON', 'Atlantic salmon with seasonal vegetables and lemon butter sauce.', '₹780'],
        [paneer, 'HERB CRUSTED CHICKEN', 'Chicken breast with herb crust, served with roasted vegetables.', '₹680'],
        [paneer, 'TRUFFLE MUSHROOM RISOTTO', 'Creamy Arborio rice with wild mushrooms and truffle oil.', '₹640'],
        [paneer, 'LAMB CHOPS', 'Grilled lamb chops with rosemary jus and seasonal greens.', '₹920']
      ]} />

      <MenuSection title='PASTA & RISOTTO' subtitle='Comfort in every bite.' items={[
        [paneer, 'PENNE ARRABBIATA', 'Penne pasta in a spicy tomato sauce with garlic and herbs.', '₹520'],
        [paneer, 'FETTUCCINE ALFREDO', 'Creamy parmesan sauce with mushrooms and herbs.', '₹560'],
        [paneer, 'SPINACH & RICOTTA RAVIOLI', 'Handmade ravioli in a sage butter sauce.', '₹620'],
        [paneer, 'SEAFOOD RISOTTO', 'Arborio rice with prawns, calamari and a touch of saffron.', '₹720']
      ]} />

      <MenuSection title='MAINS' subtitle='Hearty dishes. Lasting impressions.' items={[
        [paneer, 'GRILLED CHICKEN STEAK', 'Juicy chicken with pepper sauce, served with mashed potatoes and vegetables.', '₹690'],
        [paneer, 'CHICKEN PESTO', 'Grilled chicken with basil pesto, roasted vegetables and herb rice.', '₹680'],
        [paneer, 'VEGETABLE WELLINGTON', 'Layers of seasonal vegetables wrapped in buttery puff pastry.', '₹620'],
        [paneer, 'MISO GLAZED TOFU', 'Tofu with miso glaze, served with stir-fried vegetables and jasmine rice.', '₹580']
      ]} />

      <MenuList title='BREADS' subtitle='The perfect accompaniment.' items={[
        ['NAAN', '₹70 / ₹80 / ₹90'],
        ['LACHHA PARATHA', '₹80'],
        ['ROOMALI ROTI', '₹60']
      ]} />

      <MenuList title='SIDES' subtitle='Little extras. Big difference.' items={[
        ['FRENCH FRIES', '₹220'],
        ['MASHED POTATOES', '₹200'],
        ['SAUTÉED VEGETABLES', '₹240'],
        ['TRUFFLE FRIES', '₹320']
      ]} />

      <MenuSection title='DESSERTS' subtitle='A sweet ending to a wonderful experience.' items={[
        [paneer, 'CHOCOLATE LAVA CAKE', 'Warm chocolate cake with a molten center, served with vanilla ice cream.', '₹380'],
        [paneer, 'GULAB JAMUN CHEESECAKE', 'A fusion dessert with classic Indian flavours and a modern twist.', '₹420'],
        [paneer, 'TIRAMISU', 'Layers of coffee-soaked biscuits and mascarpone cream.', '₹450'],
        [paneer, 'RAS MALAI', 'Soft cottage cheese dumplings in saffron-infused milk.', '₹380']
      ]} />

      <MenuList title='BEVERAGES' subtitle='Sips that complement every moment.' items={[
        ['FRESH LIME SODA / WATER', '₹120'],
        ['MASALA CHAI', '₹120'],
        ['ICED TEA', '₹180'],
        ['CAPPUCCINO / LATTE', '₹220'],
        ['COLD COFFEE', '₹220'],
        ['SIGNATURE MOCKTAILS', '₹280']
      ]} />

    </div>
  )
}

const MenuSection = ({ title, subtitle, items }) => {
  return (
    <section className='px-15 py-8 border-b border-[#dea869]/40'>
      <div className='flex items-center gap-5'>
        <hr className='text-[#dea869] w-10' />
        <h2 className='text-[#ffefd6] text-3xl tracking-widest'>{title}</h2>
        <p className='ml-auto text-[#dea869] italic'>{subtitle}</p>
      </div>
      <div className='grid grid-cols-2 gap-x-10 gap-y-7 pt-6'>
        {items.map(([image, name, description, price]) => (
          <div key={name} className='grid grid-cols-[180px_1fr] gap-5'>
            <img src={image} alt={name} className='w-full h-28 object-cover' />
            <div>
              <div className='flex justify-between gap-3'>
                <h3 className='text-[#ffefd6] text-lg tracking-wide'>{name}</h3>
                <p className='text-[#dea869] text-lg whitespace-nowrap'>{price}</p>
              </div>
              <p className='text-zinc-400 text-sm pt-2 leading-relaxed'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const MenuList = ({ title, subtitle, items }) => {
  return (
    <section className='px-15 py-8 border-b border-[#dea869]/40'>
      <div className='flex items-center gap-5'>
        <hr className='text-[#dea869] w-10' />
        <h2 className='text-[#ffefd6] text-3xl tracking-widest'>{title}</h2>
        <p className='ml-auto text-[#dea869] italic'>{subtitle}</p>
      </div>
      <div className='grid grid-cols-3 gap-10 pt-6 text-sm'>
        {items.map(([name, price]) => (
          <p key={name}>{name} <span className='float-right text-[#dea869]'>{price}</span></p>
        ))}
      </div>
    </section>
  )
}

export default MenuItems