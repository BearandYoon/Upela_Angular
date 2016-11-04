<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="ISO-8859-1"/>
<xsl:template match="/">

	<html>
		<head>
			<title>TNT Label</title>
			<script language="JavaScript" type="text/javascript">
			<![CDATA[

			
			function barCode(barString) 
			{
				var myCode = new Array();
				var grow = "";
				for (var i = 0; i != barString.length; i++) 
					{
						var myChar = barString.charAt(i);
							if (myChar == "*") 
							{
							myCode[i] = "bc_star.gif";
							} 
							else 
							{
							myCode[i] = "bc_" + myChar + ".gif";
							}
					}

				for (var i=0; i != myCode.length; i++)
					{
						grow = grow + '<img width="14" height="60" src="http://iconnection.tnt.com:81/Shipper/barcode/' + myCode[i] + '" />';
					}

					return grow;

				}
	
		]]>
		</script>
		
		<style>

		font.header
		{
		color : black;
		background-color : white;
		font-weight : bold;
		font-family : arial, helvetica "sans-serif";
		font-size : 8pt;
	    }	


		font.data
		{
		color : black;
		background-color : white;
		font-family : arial , "sans-serif";
		font-size : 8pt;
		}

		font.smallprint
		{
		color : black;
		background-color : white;
		font-family : arial,  "sans-serif";
		font-size : 6pt;
		}
		
		div
		{
		page-break-after : always;
		}

		

		</style>
	</head>

	<body>
	<xsl:for-each select="CONSIGNMENTBATCH/PACKAGE">

	<!--start of main table -->
			<table width="600" height="500" cellpadding="3" cellspacing="0" border="1">
			
			<xsl:choose>
			<xsl:when test="HEADER/COLLECTION/COMPANYNAME/text()">
			<tr>
				<td width="300" valign="top"><font class="header">Account : </font><font class="data"><xsl:value-of select="HEADER/SENDER/ACCOUNT"/></font><br/><font class="header">Sender</font><br/><font class="data"><xsl:value-of select="HEADER/COLLECTION/COMPANYNAME"/><br/><xsl:value-of select="HEADER/COLLECTION/STREETADDRESS1"/><br/><xsl:if test="HEADER/COLLECTION/STREETADDRESS2/text()"><xsl:value-of select="HEADER/COLLECTION/STREETADDRESS2"/><br/></xsl:if><xsl:if test="HEADER/COLLECTION/STREETADDRESS3/text()"><xsl:value-of select="HEADER/COLLECTION/STREETADDRESS3"/><br/></xsl:if><xsl:value-of select="HEADER/COLLECTION/CITY"/><br/><xsl:if test="HEADER/COLLECTION/PROVINCE/text()"><xsl:value-of select="HEADER/COLLECTION/PROVINCE"/><br/></xsl:if><xsl:if test="HEADER/COLLECTION/POSTCODE/text()"><xsl:value-of select="HEADER/COLLECTION/POSTCODE"/><br/></xsl:if><xsl:value-of select="HEADER/COLLECTION/COUNTRY"/></font><br/><font class="header">Contact : </font><font class="data"><xsl:value-of select="HEADER/COLLECTION/CONTACTNAME"/></font><br/><font class="header">Tel : </font><font class="data"><xsl:value-of select="HEADER/COLLECTION/CONTACTDIALCODE"/>&#160;<xsl:value-of select="HEADER/COLLECTION/CONTACTTELEPHONE"/></font></td>
					<td align="center" width="300" colspan="2"><img src="http://iconnection.tnt.com:81/images/logo.gif"/><br/><br/>	<script language="JavaScript" type="text/javascript">document.write(barCode('*<xsl:value-of select="CONSIGNMENT/CONNUMBER"/>*'));</script><br/><font class="header">*<xsl:value-of select="CONSIGNMENT/CONNUMBER"/>*</font><br/><br/><font class="header">Customer Reference : </font><font class="data"><xsl:value-of select="CONSIGNMENT/CUSTOMERREF"/></font></td>
					</tr>
	

			</xsl:when>
			<xsl:otherwise>
			<tr>
				<td width="300" valign="top"><font class="header">Account : </font><font class="data"><xsl:value-of select="HEADER/SENDER/ACCOUNT"/></font><br/><font class="header">Sender</font><br/><font class="data"><xsl:value-of select="HEADER/SENDER/COMPANYNAME"/><br/><xsl:value-of select="HEADER/SENDER/STREETADDRESS1"/><br/><xsl:if test="HEADER/SENDER/STREETADDRESS2/text()"><xsl:value-of select="HEADER/SENDER/STREETADDRESS2"/><br/></xsl:if><xsl:if test="HEADER/SENDER/STREETADDRESS3/text()"><xsl:value-of select="HEADER/SENDER/STREETADDRESS3"/><br/></xsl:if><xsl:value-of select="HEADER/SENDER/CITY"/><br/><xsl:if test="HEADER/SENDER/PROVINCE/text()"><xsl:value-of select="HEADER/SENDER/PROVINCE"/><br/></xsl:if><xsl:if test="HEADER/SENDER/POSTCODE/text()"><xsl:value-of select="HEADER/SENDER/POSTCODE"/><br/></xsl:if><xsl:value-of select="HEADER/SENDER/COUNTRY"/></font><br/><font class="header">Contact : </font><font class="data"><xsl:value-of select="HEADER/SENDER/CONTACTNAME"/></font><br/><font class="header">Tel : </font><font class="data"><xsl:value-of select="HEADER/SENDER/CONTACTDIALCODE"/>&#160;<xsl:value-of select="HEADER/SENDER/CONTACTTELEPHONE"/></font></td>
				<td align="center" width="300" colspan="2"><img src="http://iconnection.tnt.com:81/images/logo.gif"/><br/><br/>	<script language="JavaScript" type="text/javascript">document.write(barCode('*<xsl:value-of select="CONSIGNMENT/CONNUMBER"/>*'));</script><br/><font class="header">*<xsl:value-of select="CONSIGNMENT/CONNUMBER"/>*</font><br/><br/><font class="header">Customer Reference : </font><font class="data"><xsl:value-of select="CONSIGNMENT/CUSTOMERREF"/></font></td>
			</tr>
			</xsl:otherwise>
			</xsl:choose>
				
			<xsl:choose>
			<xsl:when test="CONSIGNMENT/DELIVERY/COMPANYNAME/text()">
			<tr>
				<td valign="top"><font class="header">Delivery Address</font><br/><font class="data"><xsl:value-of select="CONSIGNMENT/DELIVERY/COMPANYNAME"/><br/><xsl:value-of select="CONSIGNMENT/DELIVERY/STREETADDRESS1"/><br/><xsl:if test="CONSIGNMENT/DELIVERY/STREETADDRESS2/text()"><xsl:value-of select="CONSIGNMENT/DELIVERY/STREETADDRESS2"/><br/></xsl:if><xsl:if test="CONSIGNMENT/DELIVERY/STREETADDRESS3/text()"><xsl:value-of select="CONSIGNMENT/DELIVERY/STREETADDRESS3"/><br/></xsl:if><xsl:value-of select="CONSIGNMENT/DELIVERY/CITY"/><br/><xsl:if test="CONSIGNMENT/DELIVERY/PROVINCE/text()"><xsl:value-of select="CONSIGNMENT/DELIVERY/PROVINCE"/><br/></xsl:if><xsl:if test="CONSIGNMENT/DELIVERY/POSTCODE/text()"><xsl:value-of select="CONSIGNMENT/DELIVERY/POSTCODE"/><br/></xsl:if><xsl:value-of select="CONSIGNMENT/DELIVERY/COUNTRY"/></font><br/><font class="header">Contact : </font><font class="data"><xsl:value-of select="CONSIGNMENT/DELIVERY/CONTACTNAME"/></font><br/><font class="header">Tel : </font><font class="data"><xsl:value-of select="CONSIGNMENT/DELIVERY/CONTACTDIALCODE"/>&#160;<xsl:value-of select="CONSIGNMENT/DELIVERY/CONTACTTELEPHONE"/></font></td>
				
				<td colspan="2" valign="top"><font class="header">Shipment Date : </font><font class="data"><xsl:value-of select="HEADER/SHIPMENTDATE"/></font><br/><font class="header">Description of Goods</font><br/><font class="data"><xsl:value-of select="CONSIGNMENT/GOODSDESC1"/><br/><xsl:value-of select="CONSIGNMENT/GOODSDESC2"/><br/><xsl:value-of select="CONSIGNMENT/GOODSDESC3"/></font><font class="header"><br/>Dimensions :</font><xsl:if test="CONSIGNMENT/CONSIGNMENTTYPE = 'N'"><font class="data">&#160;<xsl:value-of select="LENGTH"/>&#160;<xsl:value-of select="LENGTH/@units"/>&#160;x&#160;<xsl:value-of select="WIDTH"/>&#160;<xsl:value-of select="WIDTH/@units"/>&#160;x&#160;<xsl:value-of select="HEIGHT"/><xsl:value-of select="HEIGHT/@units"/>&#160;</font></xsl:if></td>
			</tr>
			</xsl:when>
			<xsl:otherwise>
			<tr>
				<td valign="top"><font class="header">Delivery Address</font><br/><font class="data"><xsl:value-of select="CONSIGNMENT/RECEIVER/COMPANYNAME"/><br/><xsl:value-of select="CONSIGNMENT/RECEIVER/STREETADDRESS1"/><br/><xsl:if test="CONSIGNMENT/RECEIVER/STREETADDRESS2/text()"><xsl:value-of select="CONSIGNMENT/RECEIVER/STREETADDRESS2"/><br/></xsl:if><xsl:if test="CONSIGNMENT/RECEIVER/STREETADDRESS3/text()"><xsl:value-of select="CONSIGNMENT/RECEIVER/STREETADDRESS3"/><br/></xsl:if><xsl:value-of select="CONSIGNMENT/RECEIVER/CITY"/><br/><xsl:if test="CONSIGNMENT/RECEIVER/PROVINCE/text()"><xsl:value-of select="CONSIGNMENT/RECEIVER/PROVINCE"/><br/></xsl:if><xsl:if test="CONSIGNMENT/RECEIVER/POSTCODE/text()"><xsl:value-of select="CONSIGNMENT/RECEIVER/POSTCODE"/><br/></xsl:if><xsl:value-of select="CONSIGNMENT/RECEIVER/COUNTRY"/></font><br/><font class="header">Contact : </font><font class="data"><xsl:value-of select="CONSIGNMENT/RECEIVER/CONTACTNAME"/></font><br/><font class="header">Tel : </font><font class="data"><xsl:value-of select="CONSIGNMENT/RECEIVER/CONTACTDIALCODE"/>&#160;<xsl:value-of select="CONSIGNMENT/RECEIVER/CONTACTTELEPHONE"/></font></td>
				
				<td colspan="2" valign="top"><font class="header">Shipment Date : </font><font class="data"><xsl:value-of select="HEADER/SHIPMENTDATE"/></font><br/><font class="header">Description of Goods</font><br/><font class="data"><xsl:value-of select="CONSIGNMENT/GOODSDESC1"/><br/><xsl:value-of select="CONSIGNMENT/GOODSDESC2"/><br/><xsl:value-of select="CONSIGNMENT/GOODSDESC3"/><font class="header">Dimensions :</font><xsl:if test="CONSIGNMENT/CONSIGNMENTTYPE = 'N'"><font class="data">&#160;<xsl:value-of select="LENGTH"/>&#160;<xsl:value-of select="LENGTH/@units"/>&#160;x&#160;<xsl:value-of select="WIDTH"/>&#160;<xsl:value-of select="WIDTH/@units"/>&#160;x&#160;<xsl:value-of select="HEIGHT"/><xsl:value-of select="HEIGHT/@units"/>&#160;</font></xsl:if></font></td>
			</tr>
			</xsl:otherwise>
			</xsl:choose>
			<tr>	
				<td colspan="3"><font class="header">Special Delivery Instructions : </font><font class="data"><xsl:value-of select="CONSIGNMENT/DELIVERYINST"/></font></td>
			</tr>

			<tr>
				<td><font class="header">Service and Options</font><br/><font class="data"><xsl:value-of select="CONSIGNMENT/SERVICE"/><br/><xsl:value-of select="CONSIGNMENT/OPTION1"/><br/><xsl:value-of select="CONSIGNMENT/OPTION2"/><br/><xsl:value-of select="CONSIGNMENT/OPTION3"/><br/><xsl:value-of select="CONSIGNMENT/OPTION4"/><br/><xsl:value-of select="CONSIGNMENT/OPTION5"/></font></td>
				
				<td align="center" width="70"><font class="header">No of Items</font><br/><font class="data"><xsl:value-of select="PACKAGEINDEX"/> of <xsl:value-of select="PACKAGEMAX"/></font><br/><br/><font class="header">Item Weight<br/></font><font class="data"><xsl:value-of select="WEIGHT"/>&#160;<xsl:value-of select="WEIGHT/@units"/></font><br/></td>
				
				<td><font class="smallprint">TNT'S LIABILITY FOR LOSS, DAMAGE AND DELAY IS LIMITED BY THE CMR CONVENTION OR THE WARSAW CONVENTION WHICHEVER IS APPLICABLE. THE SENDER AGREES THAT THE GENERAL CONDITIONS, ACCESSIBLE AT HTTP://ICONNECTION.TNT.COM:81/TERMSANDCONDITIONS.HTML, ARE ACCEPTABLE AND GOVERN THIS CONTRACT. IF NO SERVICES OR BILLING OPTIONS ARE SELECTED THE FASTEST AVAILABLE SERVICE WILL BE CHARGED TO THE SENDER.</font></td>
			</tr>

	</table>

<xsl:choose>
				<xsl:when test="HEADER/@last ='false'">
						<div>
							<font size="1" color="#5FFFFF">.</font>
						</div>
				</xsl:when>
				<xsl:otherwise>
				<xsl:if test="PACKAGEMAX != PACKAGEINDEX">
<br/>
<br/><DIV><FONT SIZE="1" COLOR="#5FFFFF">.</FONT></DIV>
</xsl:if>
				</xsl:otherwise>
				</xsl:choose>

</xsl:for-each>


</body>
</html>
				
</xsl:template>

</xsl:stylesheet><!-- Stylesheet edited using Stylus Studio - (c)1998-2002 eXcelon Corp. -->