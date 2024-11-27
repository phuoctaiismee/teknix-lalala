import { GroupPeopleInput } from './selectGuestInput';

export const InputSearchGuest = () => {
   return (
      <div className="flex flex-col justify-start items-start gap-2">
         <div className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">Guest</div>

         {/* Custom guest input */}
         <GroupPeopleInput />
      </div>
   );
};
