package com.pangram.utilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

public class StringPermutations {
    public static Set<String> permutationFinder(String str) {
        Set<String> perm = new HashSet<String>();
        //Handling error scenarios
        if (str == null) {
            return null;
        } else if (str.length() == 0) {
            perm.add("");
            return perm;
        }
        char initial = str.charAt(0); // first character
        String rem = str.substring(1); // Full string without first character
        Set<String> words = permutationFinder(rem);
        for (String strNew : words) {
            for (int i = 0;i<=strNew.length();i++){
                perm.add(charInsert(strNew, initial, i));
            }
        }
        return perm;
    }

    public static String charInsert(String str, char c, int j) {
        String begin = str.substring(0, j);
        String end = str.substring(j);
        return begin + c + end;
    }
    
    public static void main(String[] args) throws EncryptedDocumentException, InvalidFormatException, IOException {
    	
    	//System.out.println(permutationFinder("abc"));
    	HashSet <String> permut= new HashSet<>(permutationFinder("abcd"));
    	ArrayList<String> list= new ArrayList<>();
    	list.addAll(permut);
    	
    	String testDataPath="./src/test/resources/testdata/data.xlsx";
		
		FileInputStream inStream= new FileInputStream(testDataPath);
		Workbook workbook= WorkbookFactory.create(inStream);
		Sheet worksheet= workbook.getSheet("Sheet2");
		
		for(int i=0; i<list.size(); i++) {
    		System.out.println(list.get(i));
			worksheet.createRow(i).createCell(0);
		Cell job= worksheet.getRow(i).getCell(0);
		job.setCellValue(list.get(i));
		}
		
		FileOutputStream outStream= new FileOutputStream(testDataPath);
		
		workbook.write(outStream);
		
		outStream.close();
		workbook.close();
		inStream.close(); 
    	
    }
}
