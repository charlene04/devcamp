
//1
SELECT Tenants.TenantName FROM Tenants, AptTenants WHERE Tenants.TenantID = AptTenants.TenantID AND COUNT(AptTenants.AptID) > 1;




//2
SELECT Building.BuildingName, COUNT(Requests.Status) FROM Building, Requests WHERE Requests.Status = 'Open';