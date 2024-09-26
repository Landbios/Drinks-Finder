import {  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react';
import { UseAppStore } from '../stores/useAppStore';
import { Recipe } from '../types';


export default function Modal() {
    const modal = UseAppStore((state) => state.modal)
    const CloseModal = UseAppStore((state) => state.CloseModal)
    const SelectRecipe = UseAppStore((state) => state.selectedRecipe)

    const RenderIngredients = () => {
      const Ingredients: JSX.Element[] = []

      for(let i = 1; i<= 6; i++){
        const ingredient = SelectRecipe[`strIngredient${i}` as keyof Recipe]
        const meassure = SelectRecipe[`strMeasure${i}` as keyof Recipe]

        if(ingredient && meassure){
          Ingredients.push(<li key={i} className='text-lg font-normal'>{ingredient} - {meassure}</li>)
        }
      }

      return Ingredients
    }
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={CloseModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {SelectRecipe.strDrink}
                  </DialogTitle>
                      <div className='flex text-center justify-center'>
                      <img className=' w-72 rounded-xl h-60' src={SelectRecipe.strDrinkThumb} alt={SelectRecipe.strDrink}/>
                      </div>
                      
                  
                 
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                  Ingredients and Meassures
                  </DialogTitle>

                  {RenderIngredients()}
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                  Instructions
                  </DialogTitle>
                  <p className='text-lg'>{SelectRecipe.strInstructions}</p>
                  <div className='mt-5 flex justify-between gap-4'>
                    <button onClick={CloseModal} type='button' className='w-full rounded-md uppercase shadow-sm bg-gray-700 p-3 font-bold text-white hover:bg-gray-500'>Close</button>
                    <button type='button' className='w-full rounded-md uppercase shadow-sm bg-orange-700 p-3 font-bold text-white hover:bg-orange-500'>Add to favorites</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}