import java.util.Arrays;
import java.util.Comparator;

public class SearchEngine {

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.getProductName().equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int compare = products[mid].getProductName().compareToIgnoreCase(targetName);

            if (compare == 0)
                return products[mid];
            else if (compare < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void sortByProductName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
    }
}
