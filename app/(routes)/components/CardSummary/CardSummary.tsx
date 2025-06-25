import {CustomTooltip}  from "@/components/CustomTooltip";
import { CustomIcon } from "@/components/Customicon";
import { CardSummaryProps } from "./CardSummary.types";

export function CardSummary(props:CardSummaryProps){
    const {average, icon:Icon, title, tooltipText, total} = props;
    return (
        <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                <CustomIcon icon={Icon}/>
                {title}
                </div>
               
         <CustomTooltip
         content={tooltipText}
         />
            </div>
            
        </div>
    )
}