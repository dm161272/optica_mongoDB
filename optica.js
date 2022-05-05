use tienda;

db.createCollection("optica", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "optica",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "supplier": {
                    "bsonType": "object",
                    "properties": {
                        "name": {
                            "bsonType": "string"
                        },
                        "address": {
                            "bsonType": "object",
                            "properties": {
                                "street": {
                                    "bsonType": "string"
                                },
                                "number": {
                                    "bsonType": "int"
                                },
                                "floor": {
                                    "bsonType": "string"
                                },
                                "office": {
                                    "bsonType": "string"
                                },
                                "city": {
                                    "bsonType": "string"
                                },
                                "zip": {
                                    "bsonType": "string"
                                },
                                "country": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "street",
                                "number",
                                "city",
                                "zip",
                                "country"
                            ]
                        },
                        "telephone": {
                            "bsonType": "int"
                        },
                        "fax": {
                            "bsonType": "string"
                        },
                        "nif": {
                            "bsonType": "string"
                        },
                        "supplier_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "name",
                        "nif",
                        "supplier_id"
                    ]
                },
                "glasses": {
                    "bsonType": "object",
                    "properties": {
                        "brand": {
                            "bsonType": "string"
                        },
                        "grade": {
                            "bsonType": "int"
                        },
                        "frame_type": {
                            "bsonType": "string"
                        },
                        "frame_color": {
                            "bsonType": "string"
                        },
                        "glass_color_right": {
                            "bsonType": "string"
                        },
                        "glass_color_left": {
                            "bsonType": "string"
                        },
                        "quantity": {
                            "bsonType": "int"
                        },
                        "price": {
                            "bsonType": "decimal",
                            "minimum": 0
                        },
                        "glasses_id": {
                            "bsonType": "objectId"
                        },
                        "supplier_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "brand",
                        "grade",
                        "frame_type",
                        "frame_color",
                        "glass_color_right",
                        "glass_color_left",
                        "quantity",
                        "price",
                        "glasses_id"
                    ],
                    "dependencies": {
                        "supplier_id": [
                            "brand"
                        ]
                    }
                },
                "customer": {
                    "bsonType": "object",
                    "properties": {
                        "name": {
                            "bsonType": "object",
                            "properties": {
                                "first_name": {
                                    "bsonType": "string"
                                },
                                "last_name": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "first_name",
                                "last_name"
                            ]
                        },
                        "address": {
                            "bsonType": "object",
                            "properties": {
                                "street": {
                                    "bsonType": "string"
                                },
                                "number": {
                                    "bsonType": "int"
                                },
                                "floor": {
                                    "bsonType": "string"
                                },
                                "apartment": {
                                    "bsonType": "string"
                                },
                                "city": {
                                    "bsonType": "string"
                                },
                                "zip": {
                                    "bsonType": "int"
                                },
                                "country": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "street",
                                "number",
                                "city",
                                "zip",
                                "country"
                            ]
                        },
                        "e-mail": {
                            "bsonType": "string"
                        },
                        "registration_date": {
                            "bsonType": "date"
                        },
                        "reference_id": {
                            "bsonType": "objectId"
                        },
                        "customer_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "name",
                        "address",
                        "e-mail",
                        "registration_date",
                        "customer_id"
                    ]
                },
                "employee": {
                    "bsonType": "object",
                    "properties": {
                        "name": {
                            "bsonType": "object",
                            "properties": {
                                "first_name": {
                                    "bsonType": "string"
                                },
                                "last_name": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "first_name",
                                "last_name"
                            ]
                        },
                        "employee_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "name",
                        "employee_id"
                    ]
                },
                "sales_order": {
                    "bsonType": "object",
                    "properties": {
                        "quantity": {
                            "bsonType": "int"
                        },
                        "order_id": {
                            "bsonType": "objectId"
                        },
                        "glasses_id": {
                            "bsonType": "objectId"
                        },
                        "customer_id": {
                            "bsonType": "objectId"
                        },
                        "employee_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "quantity",
                        "order_id",
                        "glasses_id",
                        "customer_id",
                        "employee_id"
                    ]
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});