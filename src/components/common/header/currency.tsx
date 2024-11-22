import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import curs from "@/lib/currencies.json";
import Link from "next/link";
import useDebouncedValue from "@/hooks/use-debounced";
import {useAppSelector} from "@/stores";
import {useDispatch} from "react-redux";
import {setSearchGlobalCurrency} from "@/stores/features/global/global-slice";
// import {ToolbarTooltip} from "@/components/customs/tooltip";

export type CurrencyType = {
   code: string;
   name: string;
   symbol: string;
};

const popularCurrency: CurrencyType[] = [
   { code: 'USD', name: 'United States Dollar', symbol: '$' },
   { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
   { code: 'EUR', name: 'Euro', symbol: '€' },
   { code: 'GBP', name: 'British Pound Sterling', symbol: '£' },
];

const CurrencyButton = () => {
   const dispatch = useDispatch();
   const currency = useAppSelector((state) => state.globalSlice.searchGlobal.currency);
   const [searchTerm, setSearchTerm] = useState('');
   const [open, setOpen] = useState(false);
   const [debounceSearch] = useDebouncedValue(searchTerm, 300);
   const [listCurrency, setListCurrency] = useState<CurrencyType[]>(curs);

   const normalizeString = (str: string) =>
      str
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .replace(/\s+/g, '')
         .toLowerCase();

   const filterCurrencyData = (data: CurrencyType[], keySearch: string): CurrencyType[] => {
      const normalizedSearch = normalizeString(keySearch);
      return data.filter((currency) => normalizeString(currency.code).includes(normalizedSearch));
   };

   useEffect(() => {
       setListCurrency(debounceSearch ? filterCurrencyData(curs, debounceSearch) : curs);
   }, [debounceSearch]);

   const handleAddCurrency = (currency: CurrencyType) => {
       dispatch(setSearchGlobalCurrency(currency));
       setOpen(false);
       setSearchTerm("");
   };

   const renderCurrencyList = (currencies: CurrencyType[]) => (
      <div className="relative grid gap-8 lg:grid-cols-2">
         {currencies.map((currency, index) => (
                <Link
                    key={index}
                    title={currency.name}
                    onClick={() => handleAddCurrency(currency)}
                    href="#"
                    className="flex items-center gap-2 p-2 -m-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                    <Avatar className="w-8 h-8">
                        <AvatarFallback className="w-full h-full text-xs bg-transparent">
                            {currency.symbol}
                        </AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-normal line-clamp-1">{currency.code}</p>
                </Link>
            ))}
      </div>
   );

   return (
      <Popover open={open} onOpenChange={setOpen} modal>
         {/* <ToolbarTooltip content="Switch Currency"> */}
         <PopoverTrigger
            asChild
            className="w-8 h-8 lg:w-12 lg:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-center items-center cursor-pointer"
         >
            <span className="font-medium lg:text-base text-sm">{currency?.code}</span>
         </PopoverTrigger>
         {/* </ToolbarTooltip> */}
         <PopoverContent
            align="end"
            side="bottom"
            className="rounded-2xl w-[220px] lg:w-[312px] p-3 space-y-2"
         >
            <div className="relative">
               <Input
                  placeholder="Search currency"
                  className="h-11"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
               <i
                  className={`las ${searchTerm ? 'la-times-circle' : 'la-money-bill'} text-2xl cursor-pointer text-slate-500 absolute right-3 top-1/2 -translate-y-1/2`}
                  onClick={() => setSearchTerm('')}
               ></i>
            </div>
            <div className="border-b border-b-slate-100 dark:border-b-slate-800" />
            <ScrollArea className="h-[320px] lg:h-[512px]">
                    {debounceSearch ? (
                        <div className="py-3 px-5 space-y-5">
                            {renderCurrencyList(listCurrency)}
                        </div>
                    ) : (
                        <>
                            <div className="py-3 px-5 space-y-5">
                                <h3 className="text-sm text-slate-500 dark:text-slate-400">
                                    Popular currencies
                                </h3>
                                {renderCurrencyList(popularCurrency)}
                            </div>
                            <div className="py-3 px-5 space-y-5">
                                <h3 className="text-sm text-slate-500 dark:text-slate-400">
                                    All currencies
                                </h3>
                                {renderCurrencyList(curs)}
                            </div>
                        </>
                    )}
                </ScrollArea>
         </PopoverContent>
      </Popover>
   );
};

export default CurrencyButton;
