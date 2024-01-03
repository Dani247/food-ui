import StarIcon from "./StarIcon";

function calculateTimeLeftAndAmPm(milliseconds: number): string {
    const now = new Date();
    const futureTime = new Date(now.getTime() + milliseconds);

    const timeDifference = futureTime.getTime() - now.getTime(); // Difference in milliseconds
    const hoursLeft = Math.floor(timeDifference / 3600000); // Convert to hours
    const minutesLeft = Math.floor((timeDifference % 3600000) / 60000); // Convert remaining milliseconds to minutes

    let formattedHours = (hoursLeft % 24).toString();
    const formattedMinutes = minutesLeft.toString().padStart(2, '0');
    const amPm = Number(formattedHours) >= 12 && Number(formattedHours) < 24 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    formattedHours = (Number(formattedHours) % 12).toString() || '12';
    formattedHours = formattedHours.padStart(2, '0');

    return `${formattedHours}:${formattedMinutes} ${amPm}`;
}

function BusinessCard({ data }: any) {
    const score = Math.floor(Number(data?.score || 0));
    const positiveArray = Array.from({ length: score });
    const negativeArray = Array.from({ length: 5 - score });

    return <div className="rounded-lg overflow-hidden shadow-lg mb-4 cursor-pointer">
        <img
            alt="Restaurant 1"
            className="object-cover w-full h-40"
            height={200}
            src={data.img}
            style={{
                aspectRatio: "400/200",
                objectFit: "cover",
            }}
            width={400}
        />
        <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">{data.name}</h3>
            {
                data.category.map((category: string) => {
                    return <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
                })
            }
            <div className="flex items-center gap-1">
                {positiveArray.map(() => {
                    return <StarIcon className="w-4 h-4 fill-black" />
                })}
                {negativeArray.map(() => {
                    return <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                })}
            </div>
            {data.open ? <p className="text-sm text-green-500 dark:text-green-400">Abierto</p> : <p className="text-sm text-red-500 dark:text-red-400">Cerrado</p>}

            {data.open ? <p className="text-xs text-gray-500 dark:text-gray-400">Cierra a las {calculateTimeLeftAndAmPm(25826000)}</p> : null}
        </div>
    </div>
}

export default BusinessCard;
