import 'package:flutter/material.dart';
import 'add_car_page.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('حراج السيارات'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => AddCarPage()),
            );
          },
          child: Text('إضافة سيارة'),
        ),
      ),
    );
  }
}
