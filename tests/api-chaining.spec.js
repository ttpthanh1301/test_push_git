import { test, expect } from "@playwright/test";
test("CRUD  booking with token chaining", async ({ request }) => {
  //BUOC1: LOGIN(POST) -> GET TOKEN
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    },
  );
  expect(authResponse.status()).toBe(200);
  const authBody = await authResponse.json();
  const tokenValue = authBody.token; //lay token
  console.log(tokenValue);
  //Buoc2: create booking(post)
  const createResponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: "2023-01-01", checkout: "2023-01-02" },
        additionalneeds: "Breakfast",
      },
    },
  );
  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  console.log("Booking ID:", bookingId);
  //Update booking (PUT) //dung token +Id
  const updateResponse = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`, // <--- TRUYỀN TOKEN VÀO HEADER 'Accept': 'application/json'
      },
      data: {
        firstname: "Jim Updated", // Sửa tên
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: "2023-01-01", checkout: "2023-01-02" },
        additionalneeds: "Breakfast",
      },
    },
  );
  expect(updateResponse.status()).toBe(200);
  // --- BƯỚC 4: PATCH BOOKING (PATCH) - Sửa 1 phần ---
  const patchResponse = await request.patch(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: { Cookie: `token=${token}` },
      data: { firstname: "Jim Patch" },
      // Chỉ gửi trường cần sửa
    },
  );
  expect(patchResponse.status()).toBe(200);
  // --- BƯỚC 5: DELETE BOOKING (DELETE) ---
  const deleteResponse = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    { headers: { Cookie: `token=${token}` } },
  );
  expect(deleteResponse.status()).toBe(201);
});
