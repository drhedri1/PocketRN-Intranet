// Simple filter functionality for the Company Updates page
document.addEventListener('DOMContentLoaded', function() {
    const departmentFilter = document.getElementById('departmentFilter');
    const dateFilter = document.getElementById('dateFilter');
    
    if (departmentFilter) {
        departmentFilter.addEventListener('change', filterUpdates);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', filterUpdates);
    }
    
    function filterUpdates() {
        // In a real implementation, this would filter the updates
        // For this prototype, we'll just show an alert
        console.log('Filters applied:', {
            department: departmentFilter ? departmentFilter.value : 'all',
            date: dateFilter ? dateFilter.value : 'all'
        });
    }
});
