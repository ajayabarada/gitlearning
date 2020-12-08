package swaglab.property;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertyReader {
	
	public static String property(String key)
	{
		try {
		FileInputStream file=new FileInputStream("C:\\Users\\Ajay Barad\\Automation\\swaglab\\src\\test\\resources\\property\\swaglab.properties");
		Properties property=new Properties();
		property.load(file);
		return property.get(key).toString();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}

}
