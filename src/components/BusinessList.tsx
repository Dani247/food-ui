import { useQuery } from '@tanstack/react-query'
import BusinessCard from "./BusinessCard";

async function fetchBusiness() {
    try {
        const res = await fetch('https://api.primerocomer.com.mx/Business/getAllBusiness/21.8793469/-102.3213344');
        const data = await res.json();
        return data.data.Business;
    } catch (error) {
        console.error("there was an error", error)
    }
}

function BusinessList() {
    const business = useQuery({ queryKey: ['business'], queryFn: fetchBusiness })
    console.log("business", business.data)
    return <div>
        {business.data?.map((businessDetails: any) => {
            return <BusinessCard data={businessDetails} />
        })}
    </div>
}

export default BusinessList;