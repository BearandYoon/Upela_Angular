<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" encoding="ISO-8859-1"/>
	<xsl:template match="/">
		<html>
			<head>
				<link href="Thermal_format.css" type="text/css" rel="stylesheet"/>
			</head>
			<body>
				<xsl:for-each select="CONSIGNMENTBATCH/PACKAGE">
					<!-- <xsl:choose>
						<xsl:when test="HEADER/SENDER/COUNTRY = 'Norway'">
							<font class="addressData">Page 1 of 5</font>
						</xsl:when>
						<xsl:when test="HEADER/SENDER/COUNTRY = 'Switzerland'">
							<font class="addressData">Page 1 of 8</font>
						</xsl:when>
						<xsl:otherwise>
							<font class="addressData">Page 1 of 3</font>
						</xsl:otherwise>
					</xsl:choose> -->					
					<xsl:call-template name="internationalLabel"/>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
	<xsl:template name="internationalLabel">
		<font class="OriginSystem">ExpressConnect specialized solution</font>
		<!--start of main table -->
		<table class="mainTable1" border="0" cellspacing="0" cellpadding="0">
			<tr align="right" valign="top">
				<td><font class="carrierLicence"></font></td>
			</tr>
			<tr valign="top">
				<td>
					<table class="outLine" border="1" cellspacing="0" cellpadding="0">
						<tr>
							<td>
								<table class="table1" cellspacing="0" border="0">
									<tr>
										<td valign="top" class="table1td1" rowspan="2">
											<table class="table1td1table" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td>
														<font class="addressHeader">Sender :</font>
													</td>
													<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
													<td>
														<font class="addressHeader">TNT Account :</font>
													</td>
													<td>
														<font class="addressData">
															<xsl:value-of select="HEADER/SENDER/ACCOUNT"/>
														</font>
													</td>
												</tr>
												<xsl:choose>
													<xsl:when test="HEADER/COLLECTION/COMPANYNAME/text()">
														<tr>
															<td colspan="4">
																<font class="addressData">
																	<p class="senderAddress">
																		<xsl:value-of select="substring(HEADER/COLLECTION/COMPANYNAME, 1, 30)"/>
																		<br/>												
																		<xsl:value-of select="HEADER/COLLECTION/STREETADDRESS1"/>
																		<br/>
																		<xsl:value-of select="HEADER/COLLECTION/CITY"/>&#160;&#160;&#160;
																		<xsl:if test="HEADER/COLLECTION/PROVINCE/text()">
																			<br/>
																			<xsl:value-of select="HEADER/COLLECTION/PROVINCE"/>
																		</xsl:if>
																		<br/>
																		<xsl:if test="HEADER/COLLECTION/POSTCODE/text()">
																			<xsl:value-of select="HEADER/COLLECTION/POSTCODE"/>&#160;&#160;&#160;
																		</xsl:if>
																		<xsl:value-of select="HEADER/COLLECTION/COUNTRY"/>
																	</p>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Contact:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td colspan="2">
																<font class="addressDataRec">
																	<xsl:value-of select="HEADER/COLLECTION/CONTACTNAME"/>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Tel:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td colspan="2">
																<font class="addressDataRec">
																	<xsl:value-of select="HEADER/COLLECTION/CONTACTDIALCODE"/>&#160;
																	<xsl:value-of select="HEADER/COLLECTION/CONTACTTELEPHONE"/>
																</font>
															</td>
														</tr>													
													</xsl:when>
													<xsl:otherwise>
														<tr>
															<td colspan="4">
																<font class="addressData">
																	<p class="senderAddress">
																		<xsl:value-of select="substring(HEADER/SENDER/COMPANYNAME, 1, 30)"/>
																		<br/>												
																		<xsl:value-of select="HEADER/SENDER/STREETADDRESS1"/>
																		<br/>
																		<xsl:value-of select="HEADER/SENDER/CITY"/>&#160;&#160;&#160;
																		<xsl:if test="HEADER/SENDER/PROVINCE/text()">
																			<br/>
																			<xsl:value-of select="HEADER/SENDER/PROVINCE"/>
																		</xsl:if>
																		<br/>
																		<xsl:if test="HEADER/SENDER/POSTCODE/text()">
																			<xsl:value-of select="HEADER/SENDER/POSTCODE"/>&#160;&#160;&#160;
																		</xsl:if>
																		<xsl:value-of select="HEADER/SENDER/COUNTRY"/>
																	</p>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Contact:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td colspan="2">
																<font class="addressDataRec">
																	<xsl:value-of select="HEADER/SENDER/CONTACTNAME"/>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Tel:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td colspan="2">
																<font class="addressDataRec">
																	<xsl:value-of select="HEADER/SENDER/CONTACTDIALCODE"/>&#160;
																	<xsl:value-of select="HEADER/SENDER/CONTACTTELEPHONE"/>
																</font>
															</td>
														</tr>
													</xsl:otherwise>
												</xsl:choose>
											</table>							
										</td>
										<td colspan="2" class="table1td2" align="center">
											<img src="https://my.tnt.com/myTNT/images/lg_tnt_bw.gif" width="40"/>
											<font class="addressData">
												<br/>
											</font>
											<img src="https://my.tnt.com/barcode/RBarCodeServlet?BARCODE={substring(CONSIGNMENT/CONNUMBER, 3, 9)}&amp;CODE_TYPE=BAR39&amp;RESOLUTION=2&amp;CHECK_CHAR=N&amp;X=0.5&amp;I=0&amp;LEFT_MARGIN=3&amp;TOP_MARGIN=0&amp;BAR_HEIGHT=20&amp;HEIGHT=20&amp;WIDTH=154"/>
											<font class="addressData">
												<br/>
											</font>
											<font class="addressHeaderCode">
												<xsl:value-of select="concat('*', substring(CONSIGNMENT/CONNUMBER, 3, 9), '*')"/>
											</font>
										</td>
									</tr>
									<tr class="deliveryAddress">
										<td valign="top" class="table1td3" colspan="2">
											<font class="addressHeader">Sender Ref:</font>
											<font class="addressData"><br/>
												<xsl:value-of select="CONSIGNMENT/CUSTOMERREF"/>
											</font>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td class="table2height">
								<table class="t21" cellpadding="3" cellspacing="0" border="0">
									<tr>
										<td valign="top" class="table2td1">
											<xsl:choose>
												<xsl:when test="CONSIGNMENT/DELIVERY/COMPANYNAME/text()">
													<table class="table2td1table" border="0" cellspacing="0" cellpadding="0">
														<tr class="deliveryAddress">
															<td colspan="3">
																<font class="addressHeader">Delivery Address<br/></font>
																<font class="addressDataRec">
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/COMPANYNAME"/>
																	<br/>
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/STREETADDRESS1"/>
																	<br/>
																	<xsl:choose>
																		<xsl:when test="CONSIGNMENT/DELIVERY/STREETADDRESS2/text()">
																			<xsl:value-of select="CONSIGNMENT/DELIVERY/STREETADDRESS2"/>
																			<br/>
																		</xsl:when>	
																		<xsl:otherwise>
																			&#160;
																			<br/>
																		</xsl:otherwise>
																	</xsl:choose>
																	<xsl:choose>
																		<xsl:when test="CONSIGNMENT/DELIVERY/STREETADDRESS3/text()">
																			<xsl:value-of select="CONSIGNMENT/DELIVERY/STREETADDRESS3"/>
																			<br/>
																		</xsl:when>
																		<xsl:otherwise>
																			&#160;
																			<br/>
																		</xsl:otherwise>
																	</xsl:choose>								
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/CITY"/>
																	<br/>
																	<xsl:if test="CONSIGNMENT/DELIVERY/PROVINCE/text()">
																		<xsl:value-of select="CONSIGNMENT/DELIVERY/PROVINCE"/>
																		<br/>
																	</xsl:if>
																	<xsl:if test="CONSIGNMENT/DELIVERY/POSTCODE/text()">
																		<xsl:value-of select="CONSIGNMENT/DELIVERY/POSTCODE"/>&#160;&#160;&#160;
																	</xsl:if>
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/COUNTRY"/>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Contact:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td>
																<font class="addressDataRec">
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/CONTACTNAME"/>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Tel:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td>
																<font class="addressDataRec">
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/CONTACTDIALCODE"/>&#160;
																	<xsl:value-of select="CONSIGNMENT/DELIVERY/CONTACTTELEPHONE"/>
																</font>
															</td>
														</tr>
													</table>
												</xsl:when>
												<xsl:otherwise>
													<table class="table2td1table" border="0" cellspacing="0" cellpadding="0">
														<tr class="deliveryAddress">
															<td colspan="3">
																<font class="addressHeader">Delivery Address<br/></font>
																<font class="addressDataRec">
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/COMPANYNAME"/>
																	<br/>
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/STREETADDRESS1"/>
																	<br/>
																	<xsl:choose>
																		<xsl:when test="CONSIGNMENT/RECEIVER/STREETADDRESS2/text()">
																			<xsl:value-of select="CONSIGNMENT/RECEIVER/STREETADDRESS2"/>
																			<br/>
																		</xsl:when>	
																		<xsl:otherwise>
																			&#160;
																			<br/>
																		</xsl:otherwise>
																	</xsl:choose>
																	<xsl:choose>
																		<xsl:when test="CONSIGNMENT/RECEIVER/STREETADDRESS3/text()">
																			<xsl:value-of select="CONSIGNMENT/RECEIVER/STREETADDRESS3"/>
																			<br/>
																		</xsl:when>
																		<xsl:otherwise>
																			&#160;
																			<br/>
																		</xsl:otherwise>
																	</xsl:choose>								
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/CITY"/>
																	<br/>
																	<xsl:if test="CONSIGNMENT/RECEIVER/PROVINCE/text()">
																		<xsl:value-of select="CONSIGNMENT/RECEIVER/PROVINCE"/>
																		<br/>
																	</xsl:if>
																	<xsl:if test="CONSIGNMENT/RECEIVER/POSTCODE/text()">
																		<xsl:value-of select="CONSIGNMENT/RECEIVER/POSTCODE"/>&#160;&#160;&#160;
																	</xsl:if>
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/COUNTRY"/>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Contact:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td>
																<font class="addressDataRec">
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/CONTACTNAME"/>
																</font>
															</td>
														</tr>
														<tr class="deliveryAddress">
															<td width="20">
																<font class="addressHeaderRec">Tel:</font>
															</td>
															<td><xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text></td>
															<td>
																<font class="addressDataRec">
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/CONTACTDIALCODE"/>&#160;
																	<xsl:value-of select="CONSIGNMENT/RECEIVER/CONTACTTELEPHONE"/>
																</font>
															</td>
														</tr>
													</table>
												</xsl:otherwise>
											</xsl:choose>
										</td>
										<td width="100%" class="t24" valign="top">
											<p class="deliveryAddress">
												<font class="addressHeader">Shipping Date :</font>
												<font class="addressData">&#160;
													<xsl:value-of select="HEADER/SHIPMENTDATE"/>
													<br/>
												</font>
												<font class="addressHeader"><xsl:text disable-output-escaping="yes">Description of Goods &amp;nbsp;&amp;nbsp;</xsl:text></font>
												<font class="addressData">
													<xsl:value-of select="CONSIGNMENT/GOODSDESC1"/>
													<br/>
													<xsl:if test="CONSIGNMENT/GOODSDESC2/text()">
														<xsl:value-of select="CONSIGNMENT/GOODSDESC2"/>
														<br/>
													</xsl:if>
													<xsl:if test="CONSIGNMENT/GOODSDESC3/text()">
														<xsl:value-of select="CONSIGNMENT/GOODSDESC3"/>
														<br/>
													</xsl:if>
												</font>
												<font class="addressHeader">Dimensions:</font>&#160;
												<xsl:if test="CONSIGNMENT/CONSIGNMENTTYPE = 'N'">
													<font class="addressData">
														<xsl:value-of select="LENGTH"/>
														<xsl:value-of select="LENGTH/@units"/>&#160;x&#160;<xsl:value-of select="WIDTH"/>
														<xsl:value-of select="WIDTH/@units"/>&#160;x&#160;<xsl:value-of select="HEIGHT"/>
														<xsl:value-of select="HEIGHT/@units"/>
													</font>
												</xsl:if>
												<xsl:if test="CONSIGNMENT/PAYMENTIND = 'R'">
													<br/>
													<br/>
													<font class="addressHeader">RECEIVER PAYS</font>
													<br/>
													<font class="addressData">
														Receiver Account:&#160;
														<xsl:value-of select="CONSIGNMENT/RECEIVER/ACCOUNT" />
													</font>
												</xsl:if>
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<table cellpadding="3" cellspacing="0" border="0" class="table3">
									<tr>
										<td colspan="2" class="table3td1">
											<p class="deliveryAddress">
												<font class="addressHeader">Special Delivery Instructions</font>&#160;
												<font class="addressData">
													<xsl:value-of select="CONSIGNMENT/DELIVERYINST"/>
												</font>
											</p>
										</td>
										<td class="table3td2" align="center">
											<font class="addressDataRec">
												<xsl:choose>
													<xsl:when test="CONSIGNMENT/OPTION1/text()">
														<xsl:choose>
															<xsl:when test="substring-before(CONSIGNMENT/OPTION1, ' ') = 'DI'">
																DANGEROUS GOODS
															</xsl:when>
															<xsl:when test="substring-before(CONSIGNMENT/OPTION1, ' ') = 'BB'">
																DANGEROUS GOODS
															</xsl:when>
															<xsl:when test="substring-before(CONSIGNMENT/OPTION1, ' ') = 'LB'">
																DANGEROUS GOODS
															</xsl:when>
															<xsl:otherwise>
																NON DANGEROUS GOODS
															</xsl:otherwise>
														</xsl:choose>
													</xsl:when>
													<xsl:otherwise>
														NON DANGEROUS GOODS
													</xsl:otherwise>
												</xsl:choose>
											</font>
										</td>
									</tr>
								</table>
							</td>
						</tr>	
						<tr>
							<td class="table4height">
								<table class="t41" cellpadding="3" cellspacing="0" border="0">
									<tr>
										<td valign="top" class="table4td1">
											<font class="addressHeader">Service &amp; Options<br/></font>
											<font class="addressData">
												<xsl:value-of select="concat('(', substring-before(CONSIGNMENT/SERVICE, ' '), ')&#160;', substring-after(CONSIGNMENT/SERVICE, ' '))"/>
												<br/>
												<xsl:if test="CONSIGNMENT/OPTION1/text()">
													<xsl:value-of select="concat('(', substring-before(CONSIGNMENT/OPTION1, ' '), ')&#160;', substring-after(CONSIGNMENT/OPTION1, ' '))"/>
													<br/>
												</xsl:if>
												<xsl:if test="CONSIGNMENT/OPTION2/text()">
													<xsl:value-of select="concat('(', substring-before(CONSIGNMENT/OPTION2, ' '), ')&#160;', substring-after(CONSIGNMENT/OPTION2, ' '))"/>
													<br/>
												</xsl:if>
												<xsl:if test="CONSIGNMENT/OPTION3/text()">
													<xsl:value-of select="concat('(', substring-before(CONSIGNMENT/OPTION3, ' '), ')&#160;', substring-after(CONSIGNMENT/OPTION3, ' '))"/>
													<br/>
												</xsl:if>
												<xsl:if test="CONSIGNMENT/OPTION4/text()">
													<xsl:value-of select="concat('(', substring-before(CONSIGNMENT/OPTION4, ' '), ')&#160;', substring-after(CONSIGNMENT/OPTION4, ' '))"/>
													<br/>
												</xsl:if>
												<xsl:if test="CONSIGNMENT/OPTION5/text()">
													<xsl:value-of select="concat('(', substring-before(CONSIGNMENT/OPTION5, ' '), ')&#160;', substring-after(CONSIGNMENT/OPTION5, ' '))"/>
												</xsl:if>
											</font>
										</td>
										<td valign="top" align="left" class="table4td2">
											<font class="addressHeader">No. of Pieces<br/><br/></font>
											<font class="addressDataWeight">
												<xsl:value-of select="PACKAGEINDEX"/>&#160;of
												<xsl:value-of select="PACKAGEMAX"/><br/>
											</font>
											<font class="addressHeader">Consignment Weight<br/><br/></font>
											<font class="addressDataWeight">
												<xsl:value-of select="format-number(WEIGHT, '#0.000')"/>&#160;
												<xsl:value-of select="WEIGHT/@units"/>
											</font>
										</td>
										<td>
											<br/>
											<font class="addressSmallPrint">TNT'S LIABILITY FOR LOSS, DAMAGE AND DELAY IS LIMITED BY THE CMR CONVENTION OR THE WARSAW CONVENTION WHICHEVER IS APPLICABLE. THE SENDER AGREES THAT THE GENERAL CONDITIONS, WHICH CAN BE VIEWED AT <br/><a href="HTTP://ICONNECTION.TNT.COM:81/TERMSANDCONDITIONS.HTML">HTTP://ICONNECTION.TNT.COM:81/TERMSANDCONDITIONS.HTML</a>,<br/>ARE ACCEPTABLE AND GOVERN THIS CONTRACT. IF NO SERVICES OR BILLING OPTIONS ARE SELECTED THE FASTEST AVAILABLE SERVICE WILL BE CHARGED TO THE SENDER.</font>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<xsl:if test="PACKAGEMAX != PACKAGEINDEX">
			<div>
				<font size="1" color="#5FFFFF">.</font>
			</div>
		</xsl:if>			
	</xsl:template>
</xsl:stylesheet>