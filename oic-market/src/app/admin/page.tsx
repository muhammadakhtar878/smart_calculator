import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/mock-data"
import { formatPrice } from "@/lib/utils"

export default function AdminDashboard() {
  // Mock admin data
  const stats = {
    totalUsers: 12847,
    totalProducts: 1256,
    totalOrders: 3472,
    totalRevenue: 284756.89,
    revenueGrowth: 12.5,
    orderGrowth: 8.3
  }

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Ahmed Hassan",
      email: "ahmed@example.com",
      total: 299.99,
      status: "pending",
      date: "2024-01-15"
    },
    {
      id: "ORD-002", 
      customer: "Fatima Al-Zahra",
      email: "fatima@example.com",
      total: 149.50,
      status: "shipped",
      date: "2024-01-14"
    },
    {
      id: "ORD-003",
      customer: "Omar Abdullah",
      email: "omar@example.com", 
      total: 89.99,
      status: "delivered",
      date: "2024-01-13"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with OIC Markeït.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button>Add Product</Button>
              <Button variant="outline">View Store</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+12%</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProducts.toLocaleString()}</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+5%</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders.toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+{stats.orderGrowth}%</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{formatPrice(stats.totalRevenue)}</p>
              </div>
              <div className="bg-gold-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-gold-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+{stats.revenueGrowth}%</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </div>
            <div className="divide-y">
              {recentOrders.map((order) => (
                <div key={order.id} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.customer}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{order.date}</span>
                    <span className="font-semibold">{formatPrice(order.total)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Top Products</h2>
                <Button variant="outline" size="sm">Manage Products</Button>
              </div>
            </div>
            <div className="divide-y">
              {products.slice(0, 5).map((product) => (
                <div key={product.id} className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      📦
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 line-clamp-1">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(product.price)}</p>
                      <p className="text-sm text-gray-500">{product.reviewCount} reviews</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Add New Product
            </Button>
            <Button variant="outline">
              Process Orders
            </Button>
            <Button variant="outline">
              Manage Categories
            </Button>
            <Button variant="outline">
              View Analytics
            </Button>
          </div>
        </div>

        {/* Islamic Features Notice */}
        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <span className="text-white text-lg">🌙</span>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-800">Islamic Marketplace Features</h3>
              <p className="text-emerald-700">
                Manage halal certifications, Ramadan specials, and Islamic product categories with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}