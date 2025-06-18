public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Footwear"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories")
        };

        System.out.println("🔍 Linear Search:");
        Product found1 = SearchEngine.linearSearch(products, "Phone");
        System.out.println(found1 != null ? "Found: " + found1 : "Product not found");

        System.out.println("\n🔍 Binary Search:");
        SearchEngine.sortByProductName(products); // sort first
        Product found2 = SearchEngine.binarySearch(products, "Phone");
        System.out.println(found2 != null ? "Found: " + found2 : "Product not found");
    }
}
