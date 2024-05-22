<template>
  <div>
    <div>
         <UModal scroll v-model="isShowPrivatePoli" >
            <template #header>
              <h3>Chính sách bảo mật</h3>
            </template>
            <div class="con-content-scroll">
              <h5>Mục đích và phạm vi truy cập</h5>
              <p>
                Việc thu thập dữ liệu chủ yếu trên website space cinema bao gồm: email, điện thoại, 
                số chứng minh thư nhân dân/căn cước công dân, mật khẩu đăng nhập, địa chỉ khách hàng (thành viên).
                 Đây là các thông tin mà website Space Cinema cần thành viên cung cấp bắt buộc khi đăng ký sử dụng 
                 dịch vụ và để website Betacinemas.vn liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên website 
                 Betacinemas.vn nhằm đảm bảo quyền lợi cho người tiêu dùng.
              </p>
            </div>
         </UModal> 
      </div>
      <div class="container-fluid col-12 col-md-9 col-lg-7 col-xl-5 text-center form-signup mt-2">
            <UCard class="w-full mt-4">
              <h3>Đăng ký tài khoản</h3>
              <UForm :schema = "schema" :state="userRegister" class="space-y-4" @submit="onSubmit">
                <div class ="row">
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Tên đầy đủ" name="fullName" >
                      <UInput v-model="userRegister.fullName"  />
                    </UFormGroup>
                  </div>
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Tên" name="name">
                      <UInput v-model="userRegister.name"  />
                    </UFormGroup>
                  </div>
                </div>

                <div class ="row">
                  <div class = "col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Email" name="email">
                      <UInput v-model="userRegister.email"  />
                    </UFormGroup>
                  </div>
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Số điện thoại" name="phoneNumber">
                      <UInput v-model="userRegister.phoneNumber"  />
                    </UFormGroup>
                  </div>

                </div>

                <div class ="row">
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Mật khẩu" name="password">
                      <UInput type ="password" v-model="userRegister.password"  />
                    </UFormGroup>
                  </div>
                  <div class = "col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Xác nhận mật khẩu" name="retypePassword">
                      <UInput type = "password" v-model="userRegister.retypePassword"  />
                    </UFormGroup>
                  </div>

                </div>

                <div class = "row">
                  <div class = "col-9 input-info-register">
                    <UFormGroup size="xl" class="" label="Mã xác thực" name="confirmCode">
                      <UInput v-model="userRegister.confirmCode"
                      type = "number"
                      :maxLength = "6"
                      :disabled="isDisableEmailCode"

                        />
                    </UFormGroup>
                  </div>
                  <div class="col-3 input-info-register flex items-center">
                    <UButton :disabled="isDisableGetCode" @click ="sendCodeClick" style="background:#fda085;color:#000">Lấy mã</UButton>
                  </div>
                </div>

              <div class="row" style="margin-top: 7px;">
                  <p style="color:#000; font-size:11px; font-style:italic;">(*) Khi bấm vào đăng ký tài khoản, bạn chắc chắn đã đọc và đồng ý với 
                  <a style="color: blue;" href="" @click.prevent = "isShowPrivatePoli  = !isShowPrivatePoli">Chính sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn</a>
                  của khóa hoc.</p>
                </div>
                <div class="row" style="background-image: linear-gradient(to left, #03a8f473 0%, #03a9f4 51%, #606ac1 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
                  <button  type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG KÝ</button>
                </div>
                <div class="row" style="background-image: linear-gradient(to right, #fc3606 0%, #fda085 51%, #fc7704 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
                  <button type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG KÝ VỚI FACEBOOK</button>
                </div>
              </UForm>
            </UCard>
        </div>
  </div>

</template>

<script setup>

    

const signupData = useSignup();
 
const {
      userRegister,
      schema,
      isDisableGetCode,
      isDisableEmailCode,
      onSubmit,
      sendCodeClick
     } = signupData;

const isShowPrivatePoli = ref(false);


</script>

