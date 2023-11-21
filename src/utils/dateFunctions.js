import { formatDistanceToNow } from "date-fns";

export const getFormatDistanceToNow = date => {
    const fromNow = formatDistanceToNow(new Date(date), {
        addSuffix: true
    });
    return fromNow;
}