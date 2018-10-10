import { Component } from '@angular/core';


@Component({
  selector: 'app-reservation',
  templateUrl: '../templates/reservation.html'
})

export class ReservationComponent {
  public venue: Object;
  public session: Object;
  public precheckin: Object;

  constructor() {
    this.venue = {
      'id': 21,
      'name': 'Antons Hotel',
      'major': 51,
      'welcome_message': 'Hello',
      'farewell_message': 'Good buy',
      'created_at': '2015-07-20T11:25:44.089+02:00',
      'updated_at': '2015-08-07T10:13:44.771+02:00',
      'status': 'active',
      'stars_number': null,
      'payment_enabled': false,
      'uuid': '4fb47b53-1992-4905-8606-03917fd6fa4e',
      'city_tax_ready': false,
      'pms_integrated': false,
      'key_provider': 'messerschmitt',
      'photo': 'https://conichi-development.s3.amazonaws.com/uploads/venue/photo/9/b521313df5850ba5507dffff51720b60.jpg',
      'external_key_provider_code': 'KEY_PROVIDER_CODE',
      'require_user_signature': true,
      'require_travel_document': true,
      'checkin_time': '11:00 am',
      'checkout_time': '03:00 pm',
      'location': {
        'zip': '10999',
        'city_name': 'Berlin',
        'street_name': 'Conichi GmbH',
        'country_name': 'Germany',
        'country_code': 'DE',
        'latitude': 52.4956904,
        'longitude': 13.4272009
      },
      'contact': {
        'website': 'antonhotel.com',
        'email': 'anton.domashnev@conichi.com',
        'phone': '+491608514741',
        'formatted_phone': '+49160-851-4741'
      }
    };

    this.precheckin = {
      'precheckin_request': {
        'venue_id': 57,
        'arrived_on': '2015-11-11',
        'departed_on': '2015-11-15',
        'arrive_time': 'morning',
        'reservation_number': '1810',
        'room_type': 'comfort',
        'travel_purpose': 'L',
        'coming_from': 'web',
      }
    };
    
    this.session = {
      user: {
        email: 'marc.horne@conichi.com',
        name: 'Marc Horne',
        profile_photo: 'https://conichi-development.s3.amazonaws.com/user/avatar/39/702169e8ac066658d64b20abd5b4d5e3.jpg'
      }
    };
  }
}
