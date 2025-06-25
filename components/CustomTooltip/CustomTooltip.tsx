import { Button } from "@/components/ui/button"
import { Info} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { CustomTooltipProps } from "./CustomTooltip.types";


  export function CustomTooltip(props:CustomTooltipProps) {
    const {content} = props;
    return (
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info strokeWidth={1} className="h-5 w-5" ></Info>
        </TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
        
      </Tooltip>
      </TooltipProvider>
    )
  }