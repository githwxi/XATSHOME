
public class Payroll {
    public static final int INITIAL_MAXIMUM_SIZE = 1024;

    public Payroll() {
	/* your code */
    }
    
    public void add_employee(Employee newbie) {
	/* your code */
    }

    public void remove_employee(int i) throws EmployeeIndexException {
	/* your code */
    }
    
    public int find_employee(String name) throws EmployeeNotFoundException {
	/* your code */
    }

    public void add_payroll(Payroll source) {
	/* your code */
    }

    public void copy_payroll(Payroll source) {
	/* your code */
    }

    private Employee people[];
    private int maximum_size;
    private int current_size;
    ...
}
