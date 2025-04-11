import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TopProducts() {
  const products = [
    {
      id: "01",
      name: "Home Decor Range",
      popularity: 65,
      sales: "65%",
      color: "bg-blue-500",
    },
    {
      id: "02",
      name: "Disney Princess Pink Bag III",
      popularity: 29,
      sales: "29%",
      color: "bg-green-500",
    },
    {
      id: "03",
      name: "Bathroom Essentials",
      popularity: 18,
      sales: "18%",
      color: "bg-purple-500",
    },
    {
      id: "04",
      name: "Apple Smartwatches",
      popularity: 25,
      sales: "25%",
      color: "bg-orange-500",
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm">
                <th className="pb-4 font-normal">#</th>
                <th className="pb-4 font-normal">Name</th>
                <th className="pb-4 font-normal">Popularity</th>
                <th className="pb-4 font-normal">Sales</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="py-4 text-sm">{product.id}</td>
                  <td className="py-4 text-sm">{product.name}</td>
                  <td className="py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${product.color}`}
                        style={{ width: `${product.popularity}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {product.sales}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
