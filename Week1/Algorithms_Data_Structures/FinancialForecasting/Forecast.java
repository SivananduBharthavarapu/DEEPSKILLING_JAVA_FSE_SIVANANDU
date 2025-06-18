import java.util.HashMap;
import java.util.Map;

public class Forecast {
    private double initialValue;
    private double growthRate; // e.g. 0.05 for 5% growth
    private Map<Integer, Double> memo = new HashMap<>(); // for memoization

    public Forecast(double initialValue, double growthRate) {
        this.initialValue = initialValue;
        this.growthRate = growthRate;
    }

    // Recursive forecast
    public double predictValue(int year) {
        if (year == 0) return initialValue;

        if (memo.containsKey(year)) return memo.get(year);

        double predicted = predictValue(year - 1) * (1 + growthRate);
        memo.put(year, predicted); // memoization to avoid recomputation
        return predicted;
    }
}
